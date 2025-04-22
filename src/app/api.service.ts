import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product";

@Injectable ({providedIn: 'root'})
export class ApiService {
    private baseURL = "a/a/a";
    constructor(private http: HttpClient) {}


    /*Get all product*/
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseURL)
    }

    
}

