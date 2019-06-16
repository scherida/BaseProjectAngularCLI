export class TablePaging {

    /* ============================================================================================ */
    /* Essa é uma classe auxiliar, cujo o objetivo é gerenciar a paginação                          */
    /* de uma tabla ou qualquer tipo de lista. Cada instancia (" myObject = new TablePaging(); ")   */
    /* deve ser referente a apenas uma unica lista para não haver efeitos colaterais.               */
    /* Para que a páginação funcione devemos utilizar o método 'onInit()' inserindo a lista que     */
    /* queremos editar, o limite de componentes mostrado em cada página, a posição em que o classe  */
    /* exibirá sua lista e por fim uma função 'callback', onde ela receberá duas listas como        */
    /* parametros, a primeira é a lista de paginação, a segunda são as opções de páginas para       */
    /* navegar entre elas.                                                                          */
    /* ============================================================================================ */

    private list: any;
    private limit: any;
    private callback: any;
    private position : number = 1;

    public sync(
        position: number,
        limit : number
    ) {
        if(position != undefined){
            this.position = position;
        }
        this.limit = limit;
        var numberOfPages = ( this.list.length <  this.limit ? 1 : Math.round(( this.list.length / this.limit )));
        if( this.position > numberOfPages ){
            this.position = numberOfPages;
        }
        /* montando a pagina da posição */
        var aux = ((this.position * this.limit) - this.limit);
        var finalList = [];
        for (var i = aux; i < (this.position * this.limit); i++) {
            if (this.list[i] != undefined){
                finalList.push(this.list[i]);
            }
        }
        const firstNumberForPagination = ( this.position == 1 || this.position <= 4 ? 1 : this.position - 3 );
        const lastNumberForPagination = ( this.position >= numberOfPages || (this.position + 3) >= numberOfPages ? numberOfPages : this.position + 3 );
        var paginationList = [];
        for(var i = firstNumberForPagination; i <= lastNumberForPagination; i++){
            if(i == this.position){
                paginationList.push({ position: i, active: true })
            } else {
                paginationList.push({ position: i, active: false })
            }
            
        }

        this.callback(finalList, paginationList);
    }

    public onInit(
        list: any,
        limit: number,
        position: number,
        callback: any
    ) {
        this.list = list;
        this.limit = limit;
        this.callback = callback;
        this.sync(position, limit);
    }



}