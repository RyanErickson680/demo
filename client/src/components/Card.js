import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ProjectModal from './ProjectDisplay';

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ minWidth: 275, maxWidth: 400, cursor: 'pointer' }} onClick={handleOpen}>
        <Card className="hover:bg-blue-100" variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Project
            </Typography>
            <Typography variant="h5" component="div">
              {project.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Subtitle
            </Typography>
            <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
              {project.description}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <ProjectModal open={open} handleClose={handleClose} project={project} />
    </>
  );
};

export default ProjectCard;