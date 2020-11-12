class Circle {
    _radius = 0

    constructor(r) {
        this._radius = r
    }

    set Radius(r) {
        this._radius = r
    }
    get Radius() {
        return this._radius
    }
    get Square() {
        return this._radius ** 2 * Math.PI
    }
    get Perimeter() {
        return this._radius * (Math.PI * 2)
    }
    get Diameter() {
        return this._radius * 2
    }

    toString() {
        return `${this._radius}`
    }
}

console.log('Task 1');

let testCircle = new Circle(15)
console.log(testCircle)
console.log('Radius = ', testCircle.Radius)
console.log('Square = ', testCircle.Square)
console.log('Perimeter = ', testCircle.Perimeter)
console.log('Diameter = ', testCircle.Diameter)




class MyHtmlElement {
    _name = ''
    _isSelfClosing = false
    _textContent = ''
    _attributes = []
    _styles = []
    _tags = []

    constructor(name, isSelfClosing, textContent, attributes, styles, tags) {
        this._name = name
        this._isSelfClosing = isSelfClosing
        this._textContent = textContent
        this._attributes = attributes
        this._styles = styles
        this._tags = tags
    }

    
    InstallAttribute(attribute) {
        if (this._attributes == null) {
            this._attributes = [attribute]
        }
        else {
            this._attributes.push(attribute)
        }
    }
    

    InstallStyle(style) {
        if (this._styles == null) {
            this._styles = [style]
        }
        else {
            this._styles.push(style)
        }
    }
    

    PushInnerTag(tag) {
        if (!this._isSelfClosing) {
            if (this._tags == null) {
                this._tags = [tag]
            }
            else {
                this._tags.push(tag)
            }
        }
    }
    

    UnshiftInnerTag(tag) {
        if (!this._isSelfClosing) {
            if (this._tags == null) {
                this._tags = [tag]
            }
            else {
                this._tags.unshift(tag)
            }
        }
    }
    
    getHtml() {
        return `<${this._name}${this._attributes != null ? ` ${this._attributes.join(' ')}` : ``}${this._styles != null ? ` style="${this._styles.join('; ')};"` : ``}${this._isSelfClosing ? `${this._textContent != null ? ` value="${this._textContent}"` : ``}>` : `>${this._textContent != null ? `${this._textContent}` : ``}${this._tags != null ? `  ${this._tags != null ? `  ${this._tags.flatMap((t) => t.getHtml()).join('')}` : ''}` : ``}</${this._name}>`}`
    }


}
console.log('\n\n\nTask 2');

let tag021 = new MyHtmlElement('a', false, 'More...', ['href="https://www.ipsum.com/"', 'target="_blank"'], null, null)
let p0 = '"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero doloremque itaque dicta debitis illum. Facilis mollitia enim nobis debitis consequuntur doloribus libero aperiam quae vero non voluptas deserunt quo incidunt rerum sapiente quidem quaerat eaque maiores quibusdam commodi, dicta consectetur."'
let tag02 = new MyHtmlElement('p', false, p0, ['class="text"'], null, null)
let tag01 = new MyHtmlElement('img', true, null, ['src="lipsum.jpg"', 'alt="Lorem Ipsum"', 'class="img"'], null, null)
let tag00 = new MyHtmlElement('h3', false, 'What is Lorem Ipsum?', null, null, null)
let tag0 = new MyHtmlElement('div', false, null, ['class="block"'], null, null)
let rootTag = new MyHtmlElement('div', false, null, ['id="wrapper"', 'class="wrap"'], null, [tag0])
rootTag.PushInnerTag(tag0)
tag0.PushInnerTag(tag00)
tag0.PushInnerTag(tag01)
tag0.PushInnerTag(tag02)
tag02.PushInnerTag(tag021)

console.log(rootTag)
console.log(rootTag.getHtml())


class CssClass {
    _name = ''
    _styles = []

    constructor(name = null, styles = []) {
        this._name = name
        this._styles = styles
    }

    AddStyle(style) {
        if (this._styles == null) {
            this._styles = [style]
        }
        else {
            this._styles.push(style)
        }
    }

    RemoveStyle(style) {
        if (this._styles != null && this._styles.includes(style)) {
            this._styles = this._styles.filter(i => i !== style)
        }
    }

    getCss() {
        return `${this._name} {\n\t${this._styles != null ? `${this._styles.join(';\n\t')};` : ``}\n}`
    }

}

console.log('\n\n\nTask 3');

let clsWrap = new CssClass('.wrap')
clsWrap.AddStyle('display: flex')

let clsBlock = new CssClass('.block')
clsBlock.AddStyle('width: 300px')
clsBlock.AddStyle('margin: 10px')

let clsImg = new CssClass('.img')
clsImg.AddStyle('width: 100%')

let clsText = new CssClass('.text')
clsText.AddStyle('text-align: justify')

console.log(clsWrap, clsBlock, clsImg, clsText);
console.log(clsBlock.getCss());



class HtmlBlock {
    _styles = []
    _root = null

    constructor(styles = [], root = null) {
        this._styles = styles
        this._root = root
    }

    getCode() {
        return `<style>\n${this._styles.flatMap(s => s.getCss()).join('\n')}\n</style>\n${this._root.getHtml()}`
    }

}

console.log('\n\nTask 4');
htmlB = new HtmlBlock([clsWrap, clsBlock, clsImg, clsText], rootTag)
console.log(htmlB);
console.log(htmlB.getCode());
document.write(htmlB.getCode())
