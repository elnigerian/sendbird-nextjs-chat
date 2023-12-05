import * as React from 'react';

const LayoutNavContainer = ({children}: any) => {
    return (
        <React.Fragment>
            <main className="xl:pl-96">
                <div className="mx-auto h-full">
                    {children}
                </div>
            </main>
        </React.Fragment>
    );
}

export default LayoutNavContainer;
