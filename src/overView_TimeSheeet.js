import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import overView from "./overview.json";

export default function overView_TimeSheeet() {
  
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      {overView.map((name, index) => (
        <Card key={index} sx={{ minWidth: '200px', margin: '20px' }}>
          <CardContent>
            <div>
            {name.name}
            </div>
           
           {name.count}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}