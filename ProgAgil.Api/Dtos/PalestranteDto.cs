namespace ProgAgil.Api.Dtos
{
    public class PalestranteDto
    {
        public string Nome { get; set; }
        public string MiniCurriculo { get; set; }
        public string ImagemURL { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        public List<RedeSocialDto> RedesSociais { get; set; }
        public List<PalestranteEventoDto> Eventos { get; set; }
    }
}