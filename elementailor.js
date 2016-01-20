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
 * Have fun!
*/


var ElemenTailor = {

    /**
     * This function is used to create an element.
     * @param e_name - name of element (example: 'div')
     * @param options - options (example: {childs: ElementTailer.create(...))}
     * @param attributes - attributes for element (example: {class: 'btn'})
    */
    create: function(
                e_name,
                options,
                attributes
            ) {

        var element = document.createElement(e_name);
        
        if (options == undefined) { options = {} };

        if ('childs' in options) {
            for (var i = 0; i < options['childs'].length; i++) {
                element.appendChild(options['childs'][i]);
            }
        }

        if ('innerHTML' in options) {
            element.innerHTML = options['innerHTML'];
        }

        if (attributes != undefined) {
            for (key in attributes) {
                element.setAttribute(
                    key,
                    attributes[key]
                )
            }
        }

        return element;
    }
};
