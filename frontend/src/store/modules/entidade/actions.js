export function saveEntityRequest(data) {

    console.log(data);

    return {
      type: '@entity/SAVE_ENTITY_REQUEST',
      payload: { data },
    };
}
  
  