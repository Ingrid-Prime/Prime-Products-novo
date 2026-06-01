import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

export function Login() {
  const { isAuthenticated, login } = useCMS();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const ok = await login(password);
      if (ok) {
        navigate('/');
      } else {
        setError('Senha incorreta. Tente novamente.');
        setPassword('');
      }
    } catch {
      setError('Erro ao verificar a senha. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center">
      <div className="bg-white p-8 rounded-sm shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock size={32} className="text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-secondary">Acesso Restrito</h2>
          <p className="text-gray-500 text-sm mt-1">Editor de conteúdo — Prime Products</p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md flex items-start mb-6">
            <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 mr-3 shrink-0" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Senha</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-3 pr-12 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="Digite a senha de acesso"
                autoFocus
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Lock size={18} />
            {loading ? 'VERIFICANDO...' : 'ENTRAR'}
          </button>
        </form>

        <p className="text-center mt-6 text-xs text-gray-400">
          Somente administradores autorizados podem editar o conteúdo.
        </p>
      </div>
    </div>
  );
}
