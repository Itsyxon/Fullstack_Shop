import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='container m-auto'>
            {children}
        </div>
    );
};

export default Container;