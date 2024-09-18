"use client"
import { tdtabelas } from "@/app/lib/Constants";
import { Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Despesas", "Valor", "Data"];
const TABLE_ROWS = [
    {
      despesa:"Compra de Material de",
      valor: "R$ 350,00",
      data: "13/09/2024"
    
    },
    {
        despesa:"Pagamento do Armario",
        valor: "R$ 1350,00",
        data: "12/09/2024"
    },
    {
        despesa:"Pagamento do Armario",
        valor: "R$ 1350,00",
        data: "12/09/2024"
    },
    {
        despesa:"Pagamento do Armario",
        valor: "R$ 1350,00",
        data: "12/09/2024"
    },
  
]

export default function TableDespezas()
{

    return(
        <>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
  <thead className="text-xs text-gray-900 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
        <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="px-6 py-3">
                  <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
  </thead>
  <tbody>
  {TABLE_ROWS.map(
              (
                {
                    despesa,
                    valor,
                    data 
            
                },
                index,
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                 
                   
                return (
                  <tr key={despesa} className="bg-white dark:bg-gray-800">
                    <td className={`${classes} ${tdtabelas}`}>
                      {despesa.toString().toUpperCase()}
                    </td>
                    <td className={`${classes} ${tdtabelas}`}>
                      {valor.toString().toUpperCase()}
                    </td>
                    <td className={`${classes} ${tdtabelas}`}>
                    {data.toString()}
                    </td>
               
                  </tr>
                );
              },
            )}
  </tbody>
</table>
        </>
    )
}