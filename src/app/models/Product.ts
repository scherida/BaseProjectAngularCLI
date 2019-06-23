export class Product {

    constructor() {}

    public key: string = "";
    public DetailedDescription: string = "";
    public briefDescription: string = "";
    public name: string = "";
    public value: number = 0;
    public images: string[] = ["url"];


    /* =========================================== */
    /* método para o evento de remoção do carrinho */
    /* =========================================== */
    private remove = ()=>{}
    public addRemoveToCart(calback : any) {
        this.remove = calback;
    }
    public removeToCart() {
        this.remove();
    }

    /* =========================================== */
    /* método para o evento de adição do carrinho  */
    /* =========================================== */
    private add = ()=>{}
    public addAddToCart(calback : any) {
        this.add = calback;
    }
    public addToCart() {
        this.add();
    }
}