export default function PaginationComponent({ page, setPage, totalPages }) {

    // render return
    return (
        <>
            {/* paginacion */}
            <div className="flex justify-center gap-2 mt-4 text-white">
                <button
                    className='cursor-pointer'
                    onClick={() => setPage(page - 1)} disabled={page === 1}>
                    Atrás
                </button>
                <span>{page} / {totalPages}</span>
                <button
                    className='cursor-pointer'
                    onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                    Siguiente
                </button>
            </div>
        </>
    )
}