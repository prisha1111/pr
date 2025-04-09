function CategoryTile({ title, imageUrl }) {
    return (
      <div className="flex flex-col items-center p-2 border rounded-lg shadow-md hover:shadow-lg transition min-w-[120px] max-w-[150px]">
        <img
          src={imageUrl}
          alt={title}
          className="w-20 h-20 object-cover rounded mb-2"
        />
        <p className="text-center text-sm font-medium">{title}</p>
      </div>
    );
  }
  
  export default CategoryTile;