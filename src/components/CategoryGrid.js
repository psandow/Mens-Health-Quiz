import React from 'react';
import './CategoryGrid.css';

const categories = [
  { id: 'random', title: 'Random Quiz', icon: 'quiz' },
  { id: 'mh', title: 'Mental Health Quiz' },
  { id: 'cancer', title: 'Cancer Quiz' },
  { id: 'cardiovascular', title: 'Cardiovascular Quiz' },
  { id: 'lifestyle', title: 'Lifestyle & Sexual Health Quiz' },
  { id: 'general', title: 'General Maintenance Quiz' }
];

const CategoryCard = ({ title, icon, onClick }) => (
  <button className="category-card" onClick={onClick}>
    <span className="material-symbols-outlined category-icon">{icon}</span>
    <span className="category-title">{title}</span>
  </button>
);

const CategoryGrid = ({ onCategoryClick }) => {
  return (
    <div className="category-grid">
      {categories.map((cat) => (
        <CategoryCard 
          key={cat.id} 
          title={cat.title} 
          icon={cat.icon} 
          onClick={() => onCategoryClick(cat.id)} 
        />
      ))}
    </div>
  );
};

export default CategoryGrid;
