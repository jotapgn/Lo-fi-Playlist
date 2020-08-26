import React from 'react';
import NotFound from '../../components/NotFound'
import PageDefault from '../../components/PageDefault'
import Square from '../../components/Square'
import Number from '../../components/Number'
import Title404 from '../../components/Title404'

function Page404(){
    return(
        <>
        <PageDefault>
        <NotFound>
        <div>
        <Square>
            <Number>
                404
            </Number>
           
        </Square>
        <Title404>Page not Found</Title404>
        </div>
        </NotFound> 
        </PageDefault>
        </>

    );
};

export default Page404;