  document.addEventListener(
        "DOMContentLoaded", () => {
            new Mmenu( "#my-menu", {
                // options
                "extensions":
                [
                "pagedim-black",
                
                ]
            }, {
                // configuration
                offCanvas: {
                    clone:true
                //    page: {
                 //       nodetype: "section"
              //      }
                }
            });
        }
    );