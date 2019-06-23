export class Product {

    constructor() { }

    public static cast(data: any): Product {
        var product: Product = new Product();

        product.key = data.key;
        product.DetailedDescription = data.DetailedDescription;
        product.briefDescription = data.briefDescription;
        product.name = data.name;
        product.value = data.value;
        product.images = data.images;

        return product;
    }

    public key: string = "";
    public DetailedDescription: string = "";
    public briefDescription: string = "";
    public name: string = "";
    public value: number = 0;
    public images: string[] = ["url"];


    /* =========================================== */
    /* método para o evento de remoção do carrinho */
    /* =========================================== */
    private remove = () => { }
    public addRemoveToCart(calback: any) {
        this.remove = calback;
    }
    public removeToCart() {
        this.remove();
    }

    /* =========================================== */
    /* método para o evento de adição do carrinho  */
    /* =========================================== */
    private add = () => { }
    public addAddToCart(calback: any) {
        this.add = calback;
    }
    public addToCart() {
        this.add();
    }
}