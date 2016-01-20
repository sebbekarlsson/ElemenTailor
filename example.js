var dom = ElemenTailor.create(
        'div',
        {
            childs: [
                ElemenTailor.create('section', {childs: [
                    ElemenTailor.create('img', {class: 'beautiful-image', innerHTML: 'test'})
                ]})
            ]
        },
        {
            class: 'tailor-content blue'
        }
);

console.log(dom);
