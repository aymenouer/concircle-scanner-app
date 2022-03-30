import React from "react";
import "./features.css";
export default function Features() {
  return (
    <div className="features" id="features">
      <h1>Features</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img src="assets/mobile.png" style={{ width: "20%" }} alt="" />
          </div>
          <div className="center">
          <p>
            - A barcode for an order and for a position is scanned by a device camera.
            </p>
          
            <p>
            - If the scan is correct, the scanned code is displayed in the
                corresponding field.
            </p>
            <p>
            - Color distinction or indication between a correct scan and a
                faulty scan.
            </p>
            <p>
            - If the scan is faulty, there is a haptic warning signal
                (vibration).
            </p>
            <p>
            - The application is optimized for iOS and Android.
            </p>
      
          </div>
        </div>
      </div>
    </div>
  );
}
