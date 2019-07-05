import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';

@Injectable()
export class LocalStorageService {

    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    }

    storeOnLocalStorage(key, value: string): void {
        this.storage.set(key, value);
        // console.log(this.storage.get(key));
    }

    getValueFromStorage(key: string) {
        this.storage.get(key);
    }
}
