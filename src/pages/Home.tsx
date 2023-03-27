import React from 'react';

export interface IHomeProps {};

const HomePage: React.FC<IHomeProps> = props => {
    return <div><p>This is the home page.</p></div>;
}

export default HomePage;