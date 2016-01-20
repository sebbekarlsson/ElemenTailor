var dom = ElemenTailor.create(
        'div',
        {
            childs: [
                ElemenTailor.create('section', {childs: [
                    ElemenTailor.create('img', {class: 'beautiful-image'}),
                    ElemenTailor.create('span', {innerHTML: 'I am a text!'})
                ]})
            ]
        },
        {
            class: 'tailor-content blue'
        }
);

console.log(dom);
