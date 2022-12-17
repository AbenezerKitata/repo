import React from "react";
import { NewReservationType } from "../types/reservation";

interface ResProps {
  reservation: NewReservationType;
}

function ResInfo({ reservation }: ResProps) {
  console.log(reservation, "reservation");
  return (
    <>
      <div>
        <h2>
          {reservation.firstName} {reservation.lastName}
        </h2>
      </div>
    </>
  );
}

export default ResInfo;
