import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import apiService from '../services/apiService';

const ExpenseAnalyzer = () => {
    const [expenseData, setExpenseData] = useState([]);

    useEffect(() => {
        fetchExpenseData();
    }, []);

    const fetchExpenseData = async () => {
        const data = await apiService.analyzeExpense();
        setExpenseData(data);
    };

    const pieData = expenseData.map((value, index) => ({
        value,
        svg: { fill: colors[index % colors.length] },
        key: `pie-${index}`,
    }));

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Expense Analysis</Text>
            <PieChart style={styles.chart} data={pieData} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    chart: {
        width: 200,
        height: 200,
    },
});

export default ExpenseAnalyzer;