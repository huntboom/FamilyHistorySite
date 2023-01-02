import React, { useEffect, useState } from 'react';
import * as GedcomParser from 'gedcom-parser';
import FamilyTree from './Tree.js';

function GedcomFileParser() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Load the GEDCOM file from the public folder
    fetch('./MyHeritage.ged')
      .then((response) => response.text())
      .then((gedcomText) => {
        // Parse the GEDCOM file using the gedcom-parser library
        const parsedData = GedcomParser.parse(gedcomText);

        // Extract the data you want to display from the parsed GEDCOM data
        const extractedData = extractData(parsedData);

        // Set the extracted data in the component state
        setData(extractedData);
      });
  }, []);

  return (
    <div>
      {data ? (
        // Render the FamilyTree component with the extracted data
        <FamilyTree data={data} />
      ) : (
        // Render a loading message while the data is being parsed
        <div>Loading data...</div>
      )}
    </div>
  );
}

export default GedcomFileParser;
