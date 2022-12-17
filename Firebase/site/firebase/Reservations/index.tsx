import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { appointmentsCollection } from "../Controller";
import ResInfo from "../ResInfo";
import { NewReservationType } from "../types/reservation";

function Reservations() {
  const [reservations, setReservations] = useState<NewReservationType[]>([]);
  useEffect(
    () =>
      onSnapshot(
        appointmentsCollection,
        (snapshot: QuerySnapshot<DocumentData>) => {
          setReservations(
            snapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        }
      ),
    []
  );
  return (
    <div className="mb-10">
      {reservations && reservations.length ? (
        <div>
          <h3>Reservations List</h3>
          {reservations?.map((reservation) => (
            <ResInfo key={reservation.id} reservation={reservation} />
          ))}
        </div>
      ) : (
        <h2 className="no-reservations">
          There are no reservations. Please add one
        </h2>
      )}
    </div>
  );
}

export default Reservations;
