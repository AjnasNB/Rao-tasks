interface Trip {
    pickupPoints: string[]; // List of pickup points for the trip
    dropPoints: string[];   // List of drop points for the trip
    warehouse?: string;     // Optional warehouse point as via point
}

interface Shipment {
    pickups: string[];      // List of all pickup points for the shipment
    drops: string[];        // List of all drop points for the shipment
    warehouse?: string;     // Optional warehouse point for the shipment
}

// Function to check if a set of trips is valid for the given shipment
function validateTrips(shipment: Shipment, trips: Trip[]): boolean {
    const remainingPickups = new Set(shipment.pickups);
    const remainingDrops = new Set(shipment.drops);

    // Check each trip
    for (const trip of trips) {
        // Check if each trip has at least one pickup and one drop point
        if (trip.pickupPoints.length === 0 || trip.dropPoints.length === 0) {
            return false;
        }

        // Check if each pickup and drop point in the trip is valid and not duplicated
        for (const pickup of trip.pickupPoints) {
            if (!remainingPickups.has(pickup)) {
                return false; // Pickup point not valid or duplicated
            }
            remainingPickups.delete(pickup);
        }

        for (const drop of trip.dropPoints) {
            if (!remainingDrops.has(drop)) {
                return false; // Drop point not valid or duplicated
            }
            remainingDrops.delete(drop);
        }

        // If a warehouse is used, ensure it's included in at least one trip
        if (trip.warehouse && !trip.pickupPoints.includes(trip.warehouse) && !trip.dropPoints.includes(trip.warehouse)) {
            return false;
        }
    }

    // Ensure all pickups and drops are covered
    if (remainingPickups.size > 0 || remainingDrops.size > 0) {
        return false;
    }

    return true; // All checks passed, trips are valid
}

// Example usage
const shipment: Shipment = {
    pickups: ["A", "B"],
    drops: ["C", "D"],
    warehouse: "W"
};

const trips: Trip[] = [
    { pickupPoints: ["A", "W"], dropPoints: ["W", "C"] },
    { pickupPoints: ["B", "W"], dropPoints: ["W", "D"] },
    // Add more trips as needed
];

console.log(validateTrips(shipment, trips)); // Should return true or false based on validity
