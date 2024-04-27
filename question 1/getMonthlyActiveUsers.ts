// Assuming userLogs is an array of objects containing user data with timestamps

interface UserLog {
    userId: string;
    loggedIn: Date;
    loggedOut: Date;
    lastSeenAt: Date;
}

// Function to determine monthly logged in and active users
function getMonthlyActiveUsers(userLogs: UserLog[]): Map<string, number> {
    const monthlyActiveUsers = new Map<string, number>();

    // Iterate through each user log
    for (const log of userLogs) {
        const loggedInMonth = log.loggedIn.getMonth();
        const lastSeenMonth = log.lastSeenAt.getMonth();

        // Check if user was logged in during each month and last seen activity within that month
        for (let month = loggedInMonth; month <= lastSeenMonth; month++) {
            const key = `${log.userId}-${month}`;
            if (!monthlyActiveUsers.has(key)) {
                monthlyActiveUsers.set(key, 0);
            }
            monthlyActiveUsers.set(key, monthlyActiveUsers.get(key)! + 1);
        }
    }

    return monthlyActiveUsers;
}

// Example usage
const userLogs: UserLog[] = [
    { userId: "user1", loggedIn: new Date("2023-01-01"), loggedOut: new Date("2023-01-10"), lastSeenAt: new Date("2023-01-15") },
    { userId: "user2", loggedIn: new Date("2023-01-05"), loggedOut: new Date("2023-01-15"), lastSeenAt: new Date("2023-01-20") },
    // Add more user logs as needed
];

const monthlyActiveUsers = getMonthlyActiveUsers(userLogs);
console.log(monthlyActiveUsers);
