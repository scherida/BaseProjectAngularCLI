import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class PersonReq {

    private collection: string = "persons";

    constructor(
        private db: AngularFireDatabase
    ) { }

    public maintain(data: any, callback: any) {
        // essa é a função para salvar uma pessoa,
        // toda a lógica do firebase pode ser feita aqui dentro

        if (data.key == null || data.key == undefined || data.key == "") {
            this.db.list(this.collection).push(data)
                .then((result: any) => {
                    // salvando a chave da passoa
                    data.key = result.key
                    this.db.list(this.collection).update(data.key, data)
                        .then((result: any) => {
                            // após terminar o processo, chamamos a função de retorno (callback)
                            callback(result);
                        });
                });
        } else {
            this.db.list(this.collection).update(data.key, data)
                .then((result: any) => {
                    // após terminar o processo, chamamos a função de retorno (callback)
                    callback(result);
                });
        }
    }

    public delete(key: string, callback: any) {
        this.db.list(this.collection).remove(key)
            .then((result: any) => {
                // após terminar o processo, chamamos a função de retorno (callback)
                callback(result);
            });
    }

    public list(callback: any) {
        this.getAll().subscribe(
            response => {
                // após terminar o processo, chamamos a função de retorno (callback)
                callback(response);
            },
            error => {
                // após terminar o processo, chamamos a função de retorno (callback)
                callback(error);
            },
            () => { }
        );
    }

    private getAll(): Observable<any[]> {
        return this.db.list(this.collection)
            .snapshotChanges()
            .pipe(
                map(changes => {
                    return changes.map(c => (
                        { key: c.payload.key, ...c.payload.val() }));
                })
            );
    }

}