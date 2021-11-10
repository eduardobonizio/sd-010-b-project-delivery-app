import React, {useState} from "react";

import Context from "./Context";

function Provider({children}) {
    // colocas os states

    return(
        <main>
            <Context.Provider value={ }>
                {children}
            </Context.Provider>
        </main>
    );
};

export default Provider;