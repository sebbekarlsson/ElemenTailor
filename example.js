var dom = ElemenTailor.create(
        'div',
        {
            class: 'tailor-content blue',
            childs: [
                ElemenTailor.create('section', {childs: [
                    ElemenTailor.create('img', {class: 'beautiful-image'})
                ]})
            ]
        }
);

console.log(dom);
