import React, { memo, useState } from 'react'
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@mui/styles';
import { DataGrid} from '@mui/x-data-grid';
import { Box, LinearProgress } from '@mui/material';

const DefaultListingTable = memo(({ data, columns, isLoading }) => {
    const [pageSize, setPageSize] = useState(5);
    const theme = useTheme();
    const classes = useStyles();

    return (
        <Box className={classes.containerStyle}>
            <Box display="flex" height="100%">
                <Box flexGrow={1}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={pageSize}
                        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                        rowsPerPageOptions={[5, 10, 20]}
                        components={{
                            LoadingOverlay: LinearProgress,
                        }}
                        loading={isLoading}
                        disableSelectionOnClick
                        sx={{
                            marginTop: 0,
                            borderRadius: '15px',
                            paddingTop: '15px',
                            border: 'none',
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
});

DefaultListingTable.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
    isLoading: PropTypes.bool
};

DefaultListingTable.defaultProps = {
    data: [],
    columns: [],
    isLoading: false
};


const useStyles = makeStyles(theme => ({
    containerStyle: { 
        height: 450, 
        width: '100%', 
        overflowX: 'scroll', 
        marginTop: 20, 
        boxShadow: '0 0 20px 0 #dadada', 
        borderRadius: '15px' 
    }
}));

export default DefaultListingTable;