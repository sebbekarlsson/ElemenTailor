var ElemenTailor = {
    'create': function(
                e_name,
                options
            ) {

        var element = document.createElement(e_name);
        
        if (options == undefined) { options = {} };

        if ('id' in options) {
            element.setAttribute('id', options['id']);
        }

        if ('class' in options) {
            element.className = options['class'];
        }

        if ('childs' in options) {
            for (var i = 0; i < options['childs'].length; i++) {
                element.appendChild(options['childs'][i]);
            }
        }

        if ('innerHTML' in options) {
            element.innerHTML = options['innerHTML'];
        }

        return element;
    }
};
