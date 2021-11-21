import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);    

const {loading , data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
//console.log(state);

const { author, quote } = !!data && data[0];

    
    return (
        <div>
            <h1>breakingbad Api</h1>
            <hr />

            {

                loading? (
                  <div className="alert alert-info" text-align="center">
                      Loading...
                      </div>

                ):
                (
                    <blockquote className="blockquote text-right">

                    <p className="mb-0"> {quote} </p>
                    <hr />
                    <footer className="blockquote-footer"> {author} </footer>
      
                </blockquote>

                )
            }

          
           <button className="btn btn-primary" onClick={ increment}>Siguiente quote</button>

         

        </div>
    )
}
