// Component imports.
import { StackGenerator, GetCard } from '../api/stackGenerator';
import { SwipePresenter } from '../presenters/swipePresenter';

class ApplicationState
{
    stack: any = [];

    constructor (stack: any = [])
    {
        this.stack = StackGenerator({size: 5, prevent_duplicates: true});
    }

    get_stack ()
    {
        return this.stack;
        //return StackGenerator({size: 5, prevent_duplicates: true});
    }
    
}

export { ApplicationState }