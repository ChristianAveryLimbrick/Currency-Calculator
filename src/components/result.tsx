import React, { useState } from 'react';


interface ResultProps {
    result: number;
    selectedCurrency: string;
}



const Result: React.FC<ResultProps> = ({ result, selectedCurrency }) => {
    return (
    

        <div className="result">
            <p> {result} {selectedCurrency}</p>
        </div>
    );
}

export default Result;