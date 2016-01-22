# ElemenTailor.js
> Create elements with ease

## Using ElemenTailor.js
> First include the script in your HTML document:

        <script type='text/javascript' src='elementailor.js'></script>

> Or if you have installed using npm, do this in your .js file:

        var ElemenTailor = require('elementailor');

> Then you can start using it:

        /* How to use */
        var element = ElemenTailor.create(/* name */, /* attributes */)

        /* Creating an image element with an src attribute */
        var img = ElemenTailor.create('img', { src: '/images/example.jpg' })

        /* Creating a simple div with a span child */
        var div = ElemenTailor.create(
            'div',
            {
                id: 'nice_id',
                class: 'nice_class',
                childs: [
                    ElemenTailor.create('span')
                ]
            }
        )

> The "name" argument is the name of the element you would like to create.
> For example: "div".
>
> The "attributes" argument is simply a dictionary of attributes.
> All keys and values in the dictionary will be applied as tag attributes on
> the element.
>
> There is some special cases though, for example; When the key is 'childs',
> an array of elements is expected and will later be appended to the inner part
> of the element.
>
> ElemenTailor.create() returns an html element.
