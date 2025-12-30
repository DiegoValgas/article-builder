export class Title {
    /**
     * @param {String} type Title type. Options: h1, h2, h3, h4, h5, h6.
     */
    constructor (type) {
        this.type = {
            'h1': 'text-4xl',
            'h2': 'text-3xl',
            'h3': 'text-2xl',
            'h4': 'text-xl',
            'h5': 'text-lg',
            'h6': 'text-sm'
        };
        this.list = new Set(Object.keys(this.type));
        this.options = [];
        this.list.forEach(item => this.options.push(
            {type: item, content: `Título ${item.charAt(1)}`}
        ));
        this.fromType(type);
    }

    /**
     * Set the current title properties.
     * @param {String} type Title type. Options: h1, h2, h3, h4, h5, h6.
     * @return {self}
     */
    fromType(type) {
        this.current = {type: null, class: 'foo'};

        if (this.list.has(type)) {
            this.current.type = type;
            this.current.class = this.type[type];
        }

        return this;
    }
}