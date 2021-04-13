import { BaseViewModel } from "./BaseViewModel";
import { Widget } from "./Widget";

//Represents a view that can hold sub-views.
export abstract class View<TViewModel extends BaseViewModel> extends Widget {
	//The bind-ed view-model.
	public dataContext: TViewModel;
    //Executed after the constructor finished loading, but right before the DOM gets rendered.
    public afterConstruction: () => void;
}