interface ReturnF<T> {
    value: T,
    done: boolean
}

type State = 'Created' | "Running" | "Suspended" | "Completed";

class PolyGenerator {

    currStateNumber: number = 0;
    STATES: Array<State> = ["Created", "Running", "Suspended", "Completed"];
    currentState: State = "Created";

    createGenerator = (steps: any) => {
     
    }

    next = () => {
        if (this.currentState === "Running") {
            throw new Error("You can't");
        }
        if (this.currentState === "Completed") {
            return { value: undefined, done: true } ;
        }

        this.currStateNumber++;
        this.currentState = this.STATES[this.currStateNumber];

        return {};
    }

    return<T>(v: T): ReturnF<T> {
        this.currentState = "Completed";
        return {
            value: v,
            done: true
        };
    }

    throw(err: string) {
        this.currentState = "Completed";
        throw new Error(err);
    }
}

const gen = new PolyGenerator();
gen.next();
console.log("Current State of GEN :",gen.currentState);
console.log(gen.return(42));
console.log("Current State of GEN :",gen.currentState);
