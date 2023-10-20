

import { useState, useEffect, useCallback } from 'react';

const useCryptoTaxCalculator = () => {
    const [taxInfo, setTaxInfo] = useState({ percentage: 0, details: '' });
    const [isUnder12, setIsUnder12] = useState(false);
    const [isOver12, setIsOver12] = useState(true);
    const [selectedIncome, setSelectedIncome] = useState('');
    const [purchasePrice, setPurchasePrice] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [salePrice, setSalePrice] = useState(0);
    const [capitalGain, setCapitalGain] = useState(0);
    const [netCapitalGain, setNetCapitalGain] = useState(0);
    const [capitalDiscount, setCapitalDiscount] = useState(0);
    const [totalTax, setTotalTax] = useState(0);
  
    const handlePurchasePriceChange = (e) => {
      const value = e.target.value;
      if (/^\d*\.?\d*$/.test(value) && value >= 0) {
        setPurchasePrice(value);
      }
    };
  
    const handleSalePriceChange = (e) => {
      const value = e.target.value;
      if (/^\d*\.?\d*$/.test(value) && value >= 0) {
        setSalePrice(value);
      }
    };
  
    const handleExpensePriceChange = (e) => {
      const value = e.target.value;
      if (/^\d*\.?\d*$/.test(value) && value >= 0) {
        setExpenses(value);
      }
    };
    const handleIncomeChange = (e) => {
      setSelectedIncome(e.target.value);
       calculateTax(e.target.value)
    };
    const handleUnder12Change = () => {
      setIsUnder12(true);
      setIsOver12(false);
    };
    
    const handleOver12Change = () => {
      setIsOver12(true);
      setIsUnder12(false);
    };
    
  
    const calculateTax = (income) => {
      let result = 0;
      let details = '';
  
      if (income === "$0 - $18200") {
        result = 0;
        details = '0%';
      } else if (income === "$18201 - $45000") {
        result = 19;
        details = 'Nil + 19% excess over $18,200';
      } else if (income === "$45001 - $120000") {
        result = 32.5;
        details = '$5,092 + 32.5% excess over $45,000';
      } else if (income === "$120001 - $180000") {
        result = 37;
        details = '$29,467 + 37% excess over $120,000';
      } else if (income === "$180001+") {
        result = 45;
        details = '$51,667 + 45% excess over $180,000';
      }
  
      setTaxInfo({ percentage: result, details: details });
      return { percentage: result, details: details };
    };
  
  
    const calculateCapitalGain = useCallback(() => {
        const newCapitalGain = salePrice - purchasePrice - expenses;
        setCapitalGain(newCapitalGain >= 0 ? newCapitalGain : 0);
      }, [salePrice, purchasePrice, expenses]);
    
      const calculateDiscount = useCallback(() => {
        const newCapitalDiscount = capitalGain / 2;
        setCapitalDiscount(newCapitalDiscount);
      }, [capitalGain]);
    
      const calculateTotalTax = useCallback(() => {
        const calculatedTotalTax = netCapitalGain * (taxInfo.percentage / 100);
        setTotalTax(calculatedTotalTax);
      }, [netCapitalGain, taxInfo]);
    
      useEffect(() => {
        calculateCapitalGain();
        calculateDiscount();
        if (isOver12) {
          setNetCapitalGain(capitalGain - capitalDiscount);
        } else {
          setNetCapitalGain(salePrice - purchasePrice - expenses);
        }
        calculateTotalTax();
      }, [purchasePrice, expenses, salePrice, capitalGain, capitalDiscount, isOver12, selectedIncome, netCapitalGain, taxInfo, calculateCapitalGain, calculateDiscount, calculateTotalTax]);
    
 
    
  

  return {
    taxInfo,
    isUnder12,
    isOver12,
    selectedIncome,
    purchasePrice,
    expenses,
    salePrice,
    capitalGain,
    netCapitalGain,
    capitalDiscount,
    totalTax,
    handlePurchasePriceChange,
    handleSalePriceChange,
    handleExpensePriceChange,
    handleIncomeChange,
    handleUnder12Change,
    handleOver12Change
  };
};

export default useCryptoTaxCalculator;
