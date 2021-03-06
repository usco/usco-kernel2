  /*save association between mesh Name and type uid*/
  saveMeshNameToPartTypeUId(meshNameToPartTypeUId){
    //TODO: store this resourceName/URI ==> uid on the server somewhere
    let meshNameToPartTypeUIdMapStr = JSON.stringify( meshNameToPartTypeUId );
    localStorage.setItem("jam!-meshNameToPartTypeUId", meshNameToPartTypeUIdMapStr );
  }

  loadMeshNameToPartTypeUId(){
    //now get back mapping of fileName to uid
    let meshNameToPartTypeUId = localStorage.getItem("jam!-meshNameToPartTypeUId" );
    meshNameToPartTypeUId = JSON.parse( meshNameToPartTypeUId );
    return meshNameToPartTypeUId;
  }

  saveAssemblyState( assembly ){
    //localstorage
    let strForm = JSON.stringify( assembly )
    localStorage.setItem("jam!-data-assembly", strForm )
  }

  loadAssemblyState( callback ){
    //local storage
    let strAssembly = localStorage.getItem( "jam!-data-assembly" )
    return JSON.parse(strAssembly)
  }
  
  