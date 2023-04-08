function BudgetCard({ roles, children }) {
  return (
    <div className="bg-[#7788f479]  inline-block justify-center items-center py-3 lg:py-6 rounded">
      <div className="bg-[#7788f4] p-1 rounded-full self-center w-8 mx-auto mb-1">
        {children}
      </div>
      <p className="font-light text-xs text-center">{roles}</p>
    </div>
  );
}

export default BudgetCard;
