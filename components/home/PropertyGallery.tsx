import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { Project } from '@/lib/data';
import { useScrollAnimate } from '@/hooks/useScrollAnimate';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation();
  return (
    <Link href={`/projects/${project.slug}`} className="card-link">
      <article className="card">
        <div className="thumb" style={{ backgroundImage: `url('${project.thumb}')` }}></div>
        <div className="card-body">
          <h3 className="card-title">{project.title}</h3>
          <span className="price">{project.price}</span>
          <div className="card-cta-wrapper">
            <span className="btn card-cta">{t('viewDetails')}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

interface PropertyGalleryProps {
  projects: Project[];
}

function PropertyGallery({ projects }: PropertyGalleryProps): React.ReactElement {
  const { t } = useTranslation();
  const sectionRef = useScrollAnimate({ threshold: 0.05 });

  return (
    <section id="gallery-section" className="section scroll-animate" ref={sectionRef}>
      <div className="container">
        <div className="glass-panel-wrapper">
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('galleryTitle') }} />
          <div className="grid">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyGallery;