/**
 * _____ _                         _____     _ _             _     
 * | ____| | ___ _ __ ___   ___ _ _|_   _|_ _(_) | ___  _ __ (_)___ 
 * |  _| | |/ _ \ '_ ` _ \ / _ \ '_ \| |/ _` | | |/ _ \| '__|| / __|
 * | |___| |  __/ | | | | |  __/ | | | | (_| | | | (_) | | _ | \__ \
 * |_____|_|\___|_| |_| |_|\___|_| |_|_|\__,_|_|_|\___/|_|(_)/ |___/
 *                                                         |__/     
 *
 * @description Javascript Library for creating elements & doms with ease.
 * @author Sebastian Robert Karlsson | sebbekarlsson97@gmail.com
 *
 * This is just a very lightweight object that you can use for creating
 * elements & doms.
 *
 * Use the ElemenTailor.create() function to create elements.
 * You can add classes, identifier and childs in one call.
 *
 * Use the ElemenTailor.delete() function to delete elements.
 *
 * Have fun!
*/


var ElemenTailor = {

    /**
     * This function is used to create an element.
     * @param e_name - name of element (example: 'div')
     * @param attributes - attributes for element (example: {class: 'btn'})
     * @return HTMLElement - returns an HTML element.
    */
    create: function(
        e_name,
        attributes
    ) {
        var element = document.createElement(e_name);
        
        if (attributes == undefined) { attributes = {} };

        if ('childs' in attributes) {
            for (var i = 0; i < attributes['childs'].length; i++) {
                element.appendChild(attributes['childs'][i]);
            }
        }

        for (key in attributes) {
            if (key in element) {
                element[key] = attributes[key];
            }

            element.setAttribute(
                key,
                attributes[key]
            )
        }

        return element;
    },

    
    /**
     * This function is used to delete an element.
     * @param element - The element to delete.
     * @return boolean - true / false.
    */ 
    delete: function(
        element
    ) {
        if (element == undefined) { return false; }

        var parent = element.parentNode;
        
        if (parent == undefined) { return false; }

        parent.removeChild(element);

        return true;
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ElemenTailor;
}
