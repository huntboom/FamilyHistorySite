
import React from 'react';
import { Tree } from 'react-tree-graph';
function FamilyTree({ data }) {
  // Configure the options for the tree visualization
  const options = {
    nodeHeight: 50,
    nodeWidth: 200,
    marginY: 50,
    name: 'name',
    attributes: ['relationship'],
    collapsible: true,
  };

  return (
    <Tree
      data={data}
      height={500}
      width={800}
      options={options}
      svgProps={{ className: 'custom' }}
    />
  );
}

export default FamilyTree;
