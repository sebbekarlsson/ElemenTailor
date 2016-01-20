var dom = ElemenTailor.create(
        'div',
        {
            childs: [
                ElemenTailor.create('section', {childs: [
                    ElemenTailor.create('img', undefined, {class: 'beautiful-image'})
                ]})
            ]
        },
        {
            class: 'tailor-content blue'
        }
);

console.log(dom);
