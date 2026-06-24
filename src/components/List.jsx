import { useMemo } from "react";

function getFactorial(n) {
    if (n === 1) return 1;

    return getFactorial( n - 1) * n;
}

function getFactorialsList(n) {
    console.log("List calculating...")

    return [
        ...new Array(n)
    ].map((_, i) => getFactorial(i + 1))
}

function List(props) {
    console.log("List rendered")

    // const list = getFactorialsList(props.length)

    const list = useMemo(
        () => getFactorialsList(props.length),
        [props.length]
    )
    const listLine = list.join(props.delimiter)

    return (<div>{ listLine }</div>)
}

export default List;