 
const dialog = document.querySelector("#dialog");
const openWindow = document.querySelector("#openWindow");
const closeButton = document.querySelector("#closeButton");


    // call-to-action button
    openWindow.addEventListener("click", eventHandlerOpen);
   
    // close dialog button
    closeButton.addEventListener("click", eventHandlerClose);

   // call-to-action button   
    function eventHandlerOpen(e) {
        dialog.showModal();
       }
   
       // close dialog button 
       function eventHandlerClose(e) {
        dialog.close();
       }

       dialog.addEventListener("click", onClickOutsideDialog);

     function onClickOutsideDialog(e) {
         const dialogDimensions = dialog.getBoundingClientRect();
       if (
             e.clientX < dialogDimensions.left ||
             e.clientX > dialogDimensions.right ||
             e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom) {

            e.currentTarget.close();

      }
   }
