import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance  } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Container, Badge, NotificationList, Notification, Scroll } from './styles';

import api from '../../services/api';

export default function Notifications() {

    //cria um estado para controlar a leitura da notificacao
    const [visible, setVisible] = useState(false);
    //cria um estado de notificacoes
    const [notifications, setNotifications] = useState([]);

    //verifica se tem alguma notificacao não lida e atualiza o array
    //essa variavel controla a existência de notificacoes nao lidas na badge
    const hasUnread = useMemo(
        () => !!notifications.find(notification => notification.read === false),
        [notifications]
    )

    //funcao responsavel por carregar as notificacoes
    useEffect(() => {
        async function loadNotifications() {
            //chama o metodo via get
            const response = await api.get('notificacoes');

            //varre as notificacoes e adiciona o campo timeDistance
            const data = response.data.map(notification => ({
                ...notification,
                timeDistance: formatDistance(
                    parseISO(notification.createdAt),
                    new Date(),
                    { addSuffix:true, locale: pt }
                )
            }));
            //atribui o retorno
            setNotifications(data);
        }
        loadNotifications(); //init
    },[]);

    //funcao responsavel por controlar a exibicao das notificacoes
    function handleToggleVisible() {
        setVisible(!visible);
    }

    //funcao responsavel por atualizar as notificacoes
    //como lida
    async function handleMarkAsRead(id){

        //TODO - juliherms verificar
        //await api.put(`notifications/${id}`);

        //percorre a lista de notificacoes e marca como lida a do id informado.
        setNotifications(
            notifications.map(notification => 
                notification._id === id ? { ...notification, read:true } : notification
            )
        );

    }
    
    return (
        <Container>
            <Badge onClick={handleToggleVisible}  hasUnread={hasUnread} >
                <MdNotifications color="#7159c1" size={20}/>
            </Badge>

            <NotificationList visible={visible}>
                <Scroll>
                    { 
                        notifications.map(notification => (

                            <Notification key={notification._id} unread={!notification.read}>
                                <p>{notification.content}</p>
                                <time>{notification.timeDistance}</time>
                                {!notification.read && (
                                   <button onClick={() => handleMarkAsRead(notification._id)} type="button">Marcar como lida</button>     
                                )}
                                
                            </Notification>
                            
                        ))
                    }
                </Scroll>
            </NotificationList>

        </Container>
    )
}