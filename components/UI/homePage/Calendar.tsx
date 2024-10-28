import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import dayjs from "dayjs";

interface CalendarProps {}

const Calendar: React.FC<CalendarProps> = () => {
    const journalEntries: Record<string, string> = {
        "2024-10-25": "Went hiking today, had a great time!",
        "2024-10-26": "Read an inspiring book about personal growth.",
    };

    const journalEntryDates = Object.keys(journalEntries);
    const customDatesStyles = journalEntryDates.map(date => ({
        date: dayjs(date).toDate(),  // Convert to a JavaScript Date in local time
        style: { backgroundColor: "#66E6CE" },
        textStyle: { color: "black", fontWeight: "bold" as "bold" },
    }));

    const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
    const [selectedEntry, setSelectedEntry] = useState<string | null>(null);

    const onDateChange = (date: Date) => {
        setSelectedStartDate(date);

        const formattedDate = dayjs(date).format("YYYY-MM-DD"); // Format as YYYY-MM-DD for consistent lookup

        if (journalEntries[formattedDate]) {
            setSelectedEntry(journalEntries[formattedDate]);
        } else {
            setSelectedEntry(null);
        }
    };

    const startDate = selectedStartDate ? dayjs(selectedStartDate).format("YYYY-MM-DD") : "";

    return (
        <View style={styles.container}>
            <CalendarPicker
                onDateChange={onDateChange}
                todayBackgroundColor="#fff"
                todayTextStyle={{color:'black'}}
                selectedDayColor="#333"
                selectedDayTextColor="#FFFFFF"
                customDatesStyles={customDatesStyles}
            />

            <View style={styles.textContainer}>
                <Text>SELECTED DATE: {startDate}</Text>
                {selectedEntry && (
                    <Text style={styles.entryText}>Journal Entry: {selectedEntry}</Text>
                )}
            </View>
        </View>
    );
};

export default Calendar;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    textContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    entryText: {
        marginTop: 10,
        color: "#555",
        fontSize: 16,
    },
});

