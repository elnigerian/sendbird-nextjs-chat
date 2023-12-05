import * as React from 'react';

const LayoutMainContainer = ({children}: any) => {
    return (
        <React.Fragment>
            <main className="xl:pl-96">
                <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
                    {children}
                </div>
            </main>
        </React.Fragment>
    );
}

export default LayoutMainContainer;